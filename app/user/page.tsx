import { getServerSession } from "next-auth";
import { Appbar } from "@/components/Appbar";
export default function(){
    const session = getServerSession();
    return <div>
        <Appbar/>
        user component
        {JSON.stringify(session)}
    </div>
}