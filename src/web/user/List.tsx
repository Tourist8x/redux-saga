/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ConstrainMode, DefaultButton, DetailsList, DetailsListLayoutMode, IColumn, IDetailsColumnProps, IIconProps, SelectionMode, buildColumns, PrimaryButton, OverflowSet, IButtonStyles, IconButton, Link, IOverflowSetItemProps, CommandBarButton, ICommandBarItemProps, IContextualMenuItem } from '@fluentui/react';
import axios from 'axios';
import * as React from 'react'
import { IUser } from '../../core/types';
import { UserPanel } from './UserPanel';

interface IState {
    isShow: boolean;
    isOpen: boolean;
    userId: number;
    columns: IColumn[];
    Items: IUser[]
}
interface IProps {
}
const addIcon: IIconProps = { iconName: 'Add' };
const onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
    const buttonStyles: Partial<IButtonStyles> = {
        root: {
            minWidth: 0,
            padding: '0 4px',
            alignSelf: 'stretch',
            height: 'auto',
        },
    };
    return (
        <IconButton
            role="menuitem"
            title="More options"
            styles={buttonStyles}
            menuIconProps={{ iconName: 'More' }}
            menuProps={{ items: overflowItems! }}
        />
    );
};
const onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
    if (item.onRender) {
        return item.onRender(item);
    }
    return (
        <CommandBarButton
            role="menuitem"
            iconProps={{ iconName: item.icon }}
            menuProps={item.subMenuProps}
            text={item.name}
        />
    );
};
const _overflowItems = (data: number): ICommandBarItemProps[] => [
    {
        key: 'edit',
        data: data,
        text: 'Edit',
        onClick: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item?: IContextualMenuItem) => {

        },
        iconProps: {
            iconName: 'Edit',
            style: {
                fontSize: "14px"
            }
        }
    },
    {
        key: 'delete',
        text: 'Delete',
        onClick: () => console.log('Move to'),
        iconProps: { iconName: 'Delete', style: { fontSize: "14px" } }
    }
];
const OverflowColumn: React.FunctionComponent<{ id: number }> = ({ id }) => (
    <OverflowSet
        aria-label="Basic Menu Example"
        role="menubar"
        overflowItems={_overflowItems(id)}
        onRenderOverflowButton={onRenderOverflowButton}
        onRenderItem={onRenderItem}
        overflowSide={'start'}
    />
);

export class List extends React.Component<IProps, IState>  {
    constructor(props: IProps) {
        super(props);
        const columns = this._buildColumn();
        this.state = {
            isShow: false,
            isOpen: false,
            columns: columns,
            userId: 0,
            Items: []
        };
        this.handleAddNewUser.bind(this);
    }
    private _buildColumn() {
        let columns: IColumn[] = [
            {
                key: 'Id',
                name: 'Id',
                isResizable: true,
                fieldName: 'Id',
                minWidth: 16,
                maxWidth: 30
            },
            {
                key: 'UserName',
                isResizable: true,
                name: 'User name',
                fieldName: 'UserName',
                minWidth: 50,
                maxWidth: 220,
            },
            {
                key: 'Email',
                name: 'Email',
                isResizable: true,
                fieldName: 'Email',
                minWidth: 50,
                maxWidth: 250,
            },
            {
                key: 'Birthday',
                isResizable: true,
                name: 'Date of birth',
                fieldName: 'Birthday',
                minWidth: 50,
                maxWidth: 200,
            },
            {
                key: 'Address',
                name: 'Address',
                isResizable: true,
                fieldName: 'Address',
                minWidth: 50,
                maxWidth: 500,
                isMultiline: true
            },
            {
                key: 'Active',
                name: 'Active',
                isResizable: true,
                fieldName: 'Active',
                minWidth: 50,
                maxWidth: 50,
            },
            {
                key: 'moreAction',
                name: '',
                isResizable: true,
                fieldName: 'Id',
                minWidth: 50,
                onRender: function (item: IUser) {
                    return <OverflowColumn id={item.Id} />
                }
            }
        ];
        return columns
    }
    handleAddNewUser = () => {
        this.setState({
            isShow: true,
            isOpen: false
        });
    }
    handleUser = () => {
        this.setState({
            isShow: false,
            isOpen: true
        });
    }
    handleCloseModal = async () => {
        const result = await this.getUserList();
        this.setState({
            isShow: false,
            isOpen: false,
            Items: result
        });
    }
    private getUserList = async () => {
        let result = await axios.get<IUser[]>('http://localhost:9000/api/user');
        return result.data;
    }
    async componentDidMount(): Promise<void> {
        let result = await this.getUserList();
        if (result) {
            this.setState({
                Items: result
            })
        }
    }
    render() {
        return (
            <>
                <div className="card mt-3">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-4">
                                <h4>User List</h4>
                            </div>
                            <div className="col-8">
                                <PrimaryButton iconProps={addIcon} style={{ float: "right" }} onClick={() => this.handleUser()}>Add New</PrimaryButton>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <DetailsList
                                items={this.state.Items}
                                compact={false}
                                columns={this.state.columns}
                                selectionMode={SelectionMode.single}
                                layoutMode={DetailsListLayoutMode.fixedColumns}
                                isHeaderVisible={true}
                                selectionPreservedOnEmptyClick={true}
                                enterModalSelectionOnTouch={true}
                                constrainMode={ConstrainMode.unconstrained}
                                onItemInvoked={(item: IUser) => this.setState({ userId: item.Id })}
                            />
                        </div>
                    </div>
                </div>
                { this.state.isOpen && <UserPanel userId={this.state.userId} isShow={this.state.isOpen} handleClose={this.handleCloseModal} />}
            </>
        );
    }
}