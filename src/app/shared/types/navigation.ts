export interface SSSMNavigationItem
{
    id: string;
    title: string;
    type: 'item' | 'group' | 'collapsable';
    translate?: string;
    icon?: string;
    hidden?: boolean;
    url?: string;
    classes?: string;
    exactMatch?: boolean;
    externalUrl?: boolean;
    openInNewTab?: boolean;
    function?: any;
    badge?: {
        title?: string;
        translate?: string;
        bg?: string;
        fg?: string;
    };
    children?: SSSMNavigationItem[];
}

export interface SSSMNavigation extends SSSMNavigationItem
{
    children?: SSSMNavigationItem[];
}
