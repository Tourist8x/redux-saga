export interface IArticle {
    id: number;
    title: string;
    body: string;
}

export type ArticleState =  {
    articles: IArticle[];
};

export type ArticleAction = {
    type: string;
    article: IArticle;
};

export type DispatchType = (args: ArticleAction) => ArticleAction;

export const InitialArticleState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
}