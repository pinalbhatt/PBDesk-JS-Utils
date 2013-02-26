module PBDeskJS {
        
    export class Utils {

        static InjectScript(url: string) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", url);
            head.appendChild(script);
        }

        static Random(to: number, from: number): number {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }

    }
}    