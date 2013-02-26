module PBDeskJS {

    export class StrUtils {
        
        static StripHTML(originalStr: string, replacerStr?: string = ""): string {
            var regex = /<\S[^><]*>/g;
            return originalStr.replace(regex, replacerStr);
        }

        static IsValidEmail(sText: string): bool {
            var regexEmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
            return regexEmail.test(sText);
        }

        static IsValidUrl(originalStr: string): bool {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
            return regexp.test(originalStr);
        }

        static IsEmpty(text: string): bool {
            var editorTextLength = text.replace(/\s+|\n+|\t+/g, "").length;
            return editorTextLength === 0;
        }

        static StripHTMLAndTrim(text: string): string {
            var htmlStriper = /<(?:.|\s)*?>/g;
            text = text.replace(htmlStriper, " ");
            while (text.indexOf("  ") >= 0) {
                text = text.replace("  ", " ");
            }
            return text.replace(/^\s+|\s+$/g, "");
        }

        static Trim(text: string): string {
            return text.replace(/^\s+|\s+$/g, "");
        }

        static LTrim(text: string): string {
            return text.replace(/^\s+/, "");
        }

        static RTrim(text: string): string {
            return text.replace(/\s+$/, "");
        }

        static Format(text: string): string {
            //check if there are two arguments in the arguments list
            if (arguments.length <= 1) {
                //if there are not 2 or more arguments there's nothing to replace
                //just return the original text
                return text;
            }

            //decrement to move to the second argument in the array
            var tokenCount = arguments.length - 2;
            for (var token = 0; token <= tokenCount; token++) {
                //iterate through the tokens and replace their placeholders from the original text in order
                text = text.replace(new RegExp("\\{" + token + "\\}", "gi"),
                                                        arguments[token + 1]);
            }
            return text;
        }
        

    }

}