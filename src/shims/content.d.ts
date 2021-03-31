
declare module '@/content/sohhbet-settings.json' {
    export interface SohhbetSetting {
        subject: string;
        discipline: string;
        content: string;
    }

    type SohhbetSettings = Partial<Record<string, SohhbetSetting>>

    const sohhbetSettings: SohhbetSettings

    export default sohhbetSettings;
}