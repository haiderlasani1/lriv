import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {PageProps} from '@/types';
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";

export default function Dashboard({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Mapping</h2>}
        >
            <Head title="Mapping"/>

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 text-gray-900 dark:text-gray-100 flex justify-between">
                            <div>
                                <PrimaryButton>Add Template</PrimaryButton>
                            </div>
                            <div className="flex">
                                <SecondaryButton className="mr-2">Invoice Template</SecondaryButton>
                                <SecondaryButton>Declaration Template</SecondaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mt-4">
                        <div className="p-4 text-gray-900 dark:text-gray-100 flex justify-between">
                            <TextInput className="w-full" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
