import { SSSMConfig } from "src/app/shared/types";

export const sssmConfig: SSSMConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme      : 'theme-default',
    customScrollbars: true,
    layout          : {
        style    : 'admin-layout',
        width    : 'fullwidth',
        navbar   : {
            primaryBackground  : 'sssm-navy-50',
            secondaryBackground: 'sssm-navy-900',
            folded             : false,
            hidden             : false,
            position           : 'left',
            variant            : 'navbar-vertical'
        },
        toolbar  : {
            customBackgroundColor: false,
            background           : 'sssm-white-500',
            hidden               : false,
            position             : 'below-static'
        },
        footer   : {
            customBackgroundColor: true,
            background           : 'sssm-navy-50',
            hidden               : false,
            position             : 'below-fixed'
        },
        sidepanel: {
            hidden  : false,
            position: 'right'
        }
    }
};
