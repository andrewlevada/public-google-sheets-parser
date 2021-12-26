declare module "public-google-sheets-parser" {
    class PublicGoogleSheetsParser {
        constructor();
        parse(spreadsheetId: string, sheetName: string): Promise<Record<string, string>[]>;
    }
    export = PublicGoogleSheetsParser
}
