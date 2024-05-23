import prisma from '@/lib/db/prisma'
import CategoryForm from '@/components/categories/CategoryForm'

export default async function page() {

    const categories = await prisma.category.findMany({ orderBy: { createdAt: 'desc' } })

    return (
        <div>
            <pre>
                {JSON.stringify(categories)}
            </pre>
            <CategoryForm />
        </div>
    )
}
