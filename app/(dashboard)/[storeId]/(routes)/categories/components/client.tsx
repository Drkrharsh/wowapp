"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface CategoryClientProps {
    data : CategoryColumn[]
}

export const CategoryClient: React.FC<CategoryClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
        <div className="flex itmes-center justify-between">
            <Heading 
            title={`Categories (${data.length})`}
            description="Manage categories for your store"
            />
            <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add New
            </Button>

        </div>
        <Separator />
        <DataTable searchKey = "name" columns={columns} data={data}/>
        <Heading title="API" description="API calls for Categories"/>
        <Separator />
        <ApiList entityName="categories" entityIdName="categoryId"/>
        </>
    );
}