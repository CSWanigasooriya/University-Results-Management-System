import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    title: string;
}

export const AppConfig: AppConfig = {
    title: 'URMS'
};
