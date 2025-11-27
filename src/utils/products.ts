import { envConfig, db, oldDb } from "@/appwrite/serverConfig";

export const getProducts = async () => {
    const response = await db.listRows({
        databaseId: envConfig.databaseId,
        tableId: envConfig.tableIdProducts,
    });

    const { total, rows: products } = response;

    return { total, products };
};

export const getProduct = async (id: string) => {
    const product = await db.getRow({
        databaseId: envConfig.databaseId,
        tableId: envConfig.tableIdProducts,
        rowId: id,
    });

    console.log("This is being run here///");
    return product;
};
