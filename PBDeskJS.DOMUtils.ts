module PBDeskJS {
    
    export class DOMUtils {
        static GetElementValue(eid: string): string {
            return document.getElementById(eid).textContent;
        };

        static SetElementValue(eid, val) {
            document.getElementById(eid).textContent = val;
        };

        static GetMetaContents(metaTagName: string) {
            var m = document.getElementsByTagName('meta');
            for (var i in m) {
                try {
                    if (m[i].name.toLowerCase() === metaTagName.toLowerCase()) {
                        return m[i].content;
                    }
                }
                catch (Error) {
                    continue;
                }
            }
            return "";
        };
    }
    
}    