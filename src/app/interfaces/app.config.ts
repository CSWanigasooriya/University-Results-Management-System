import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    intake: string;
    title: string;
    course: string;
}

export const AppConfig: AppConfig = {
    intake: 'Intake',
    title: '',
    course: ''
};
