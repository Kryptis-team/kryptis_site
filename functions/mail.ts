const client = import("resend")
export {}
const resend = client()


async function mail(to:String, subject:String, body:String):Promise<any> {
    /**
     * Send a mail using resend
     * 
     * @param to
     * @param subject
     * @param body
     */
}

