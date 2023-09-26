import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SSSM_CONFIG } from 'src/app/services/common/config-service';



@NgModule()
export class SSSMModule
{
    constructor(@Optional() @SkipSelf() parentModule: SSSMModule)
    {
        if ( parentModule )
        {
            throw new Error('SSSMModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : SSSMModule,
            providers: [
                {
                    provide : SSSM_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
