import {PageProps} from '@/types';
import {Head} from '@inertiajs/react';
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TileContainer from "@/Components/TileContainer";

export default function Dashboard({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Mapping</h2>}
        >
            <Head title="Mapping"/>

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <TileContainer>
                        <PrimaryButton className="mr-2">Add Template</PrimaryButton>
                        <div className="flex">
                            <SecondaryButton className="mr-2">Invoice Template</SecondaryButton>
                            <SecondaryButton>Declaration Template</SecondaryButton>
                        </div>
                    </TileContainer>
                    <TileContainer className="mt-4">
                        <TextInput className="w-full" placeholder="Search"/>
                    </TileContainer>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
