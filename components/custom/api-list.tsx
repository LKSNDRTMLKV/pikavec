"use client";

import { ApiAlert } from "@/components/custom/api-alert";
import { useOrigin } from "@/hooks/use-origin";
import { ApiListProps } from "@/interface/api-props";
import { useParams } from "next/navigation";


export const ApiList: React.FC<ApiListProps> = ({
    baseUrl,
    entityName,
    entityIdName,
}) => {
    // const params = useParams();
    const origin = useOrigin();

    const url = `${origin}/${baseUrl}`;

    return (
        <>
            <ApiAlert title="GET" variant="public" description={`${url}/${entityName}`} />
            <ApiAlert title="GET" variant="public" description={`${url}/${entityName}/{${entityIdName}}`} />
            <ApiAlert title="POST" variant="admin" description={`${url}/${entityName}`} />
            <ApiAlert title="PATCH" variant="admin" description={`${url}/${entityName}/{${entityIdName}}`} />
            <ApiAlert title="DELETE" variant="admin" description={`${url}/${entityName}/{${entityIdName}}`} />
        </>
    );
};