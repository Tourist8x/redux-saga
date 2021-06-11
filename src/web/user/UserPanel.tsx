/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox, DatePicker, DefaultButton, IStackProps, Panel, PrimaryButton, Separator, Stack, TextField } from "@fluentui/react"
import { useBoolean } from '@fluentui/react-hooks';
import axios from "axios";
import React from "react";
import { IUser } from "../../core/types";

interface IPanelShow {
    isShow: boolean;
    userId: number;
    handleClose(): any;
}
const buttonStyles = { root: { marginRight: 8 } };

const stackTokens = { childrenGap: 50 };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};
interface IFormUserProp {
    user: IUser;
    setUser(newValue: any): any;
}

const RegisterForm: React.FunctionComponent<IFormUserProp> = ({ user, setUser }) => {
    //const [user, setUser] = React.useState<Partial<IUser>>(defaultUser);
    return (
        <div>
            <Stack horizontal tokens={stackTokens}>
                <Stack {...columnProps}>
                    <TextField
                        label="User name "
                        required
                        errorMessage={user.UserName === '' ? 'User name are required.' : undefined}
                        value={user.UserName}
                        onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => setUser({ ...user, UserName: newValue })}
                    />
                    <TextField
                        label="Password " required
                        type="password"
                        canRevealPassword
                        revealPasswordAriaLabel="Show password"
                        value={user.Password}
                        errorMessage={user.Password === '' ? 'Password are required.' : undefined}
                        onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => setUser({ ...user, Password: newValue })}

                    />
                    <TextField
                        label="Email"
                        value={user.Email}
                        onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => setUser({ ...user, Email: newValue })}
                    />
                    <DatePicker
                        label="Date of birth"
                        value={user.Birthday}
                        onSelectDate={(newValue: Date | null | undefined) => setUser({ ...user, Birthday: newValue })}
                    />
                    <TextField
                        label="Address"
                        multiline rows={3}
                        value={user.Address}
                        onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => setUser({ ...user, Address: newValue })}
                    />
                    <Checkbox
                        label="Active"
                        styles={{ root: { marginTop: "10px" } }}
                        checked={user.Active}
                        onChange={(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, newValue?: boolean) => setUser({ ...user, Active: newValue })}
                    />
                </Stack>
            </Stack>
        </div>
    )
}
export const UserPanel: React.FunctionComponent<IPanelShow> = ({ isShow, userId, handleClose }) => {
    const defaultUser: IUser = {
        Id: 0,
        UserName: '',
        Password: '',
        Birthday: new Date(),
        Active: false,
        Address: '',
        Email: ''
    };
    const [isOpen, { setFalse: dismissPanel }] = useBoolean(isShow);
    const [user, setUser] = React.useState<IUser>(defaultUser);
    const onClose = () => {
        dismissPanel();
        handleClose();
    };
    const onDismiss = (ev?: React.SyntheticEvent<HTMLElement> | KeyboardEvent) => {
        onClose();
    }
    const onRenderFooterContent = React.useCallback(
        () => (
            <div>
                <PrimaryButton onClick={hangeSave} styles={buttonStyles}>Save</PrimaryButton>
                <DefaultButton onClick={onClose}>Cancel</DefaultButton>
            </div>
        ),
        [onClose]
    );
    const handleChange: React.Dispatch<React.SetStateAction<IUser>> = (newValue: any) => {
        setUser(newValue);
    }
    const hangeSave = async () => {
        if (user) {
            let result = await axios.post('http://localhost:9000/api/user/create', user);
            if (result) {
                onClose();
            }
        }
    }
    const getUserById = async (id: number) => {
        let result = await axios.get<IUser>(`http://localhost:9000/api/user/${id}`);
        return result.data;
    }
    React.useEffect(() => {
        if (userId > 0) {
            (async () => {
                let result = await getUserById(userId);
                setUser(result);
            })();
        }
    })
    return (
        <div>
            <Panel
                isOpen={isOpen}
                onDismiss={onDismiss}
                headerText="Add new user"
                closeButtonAriaLabel="Close"
                onRenderFooterContent={onRenderFooterContent}
                isFooterAtBottom={true}
            >
                <Separator></Separator>
                <RegisterForm user={user} setUser={handleChange} ></RegisterForm>
            </Panel>
        </div>
    );
}