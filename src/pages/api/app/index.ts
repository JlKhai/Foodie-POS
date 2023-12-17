// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/utils/db";
import NewAddonCategory from "@/components/backoffice/NewAddonCategory";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  //   console.log(session);
  if (!session) return res.status(401).send("Unauthorized.");
  const user = session.user;
  const email = user?.email as string;
  const name = user?.name as string;
  const dbUser = await prisma.user.findUnique({ where: { email } });
  const method = req.method;
  if (method === "GET") {
    if (!dbUser) {
      // 1. create new company
      const defaultCompanyName = "Ah Wa Sarr";
      const defaultCompanyAddress = "Hintada street 42, Sanchaung , Yangon";

      const company = await prisma.company.create({
        data: { name: defaultCompanyName, address: defaultCompanyAddress },
      });

      // 2. create new user
      await prisma.user.create({
        data: { name, email, companyId: company.id },
      });

      // 3. create new MenuCategory
      const defaultMenuCategoryName = "Defaut MenuCategory";
      const menuCategory = await prisma.menuCategory.create({
        data: { name: defaultMenuCategoryName, companyId: company.id },
      });

      // 4. create new Menu
      const defaultMenuName = "Default Menu";
      const menu = await prisma.menu.create({
        data: { name: defaultMenuName, price: 1000 },
      });

      // 5. create new menuCategoryMenu
      const menuCategoryMenu = await prisma.menuCategoryMenu.create({
        data: { menuId: menu.id, menuCategoryId: menuCategory.id },
      });

      // 6. create new AddonCategory
      const defaultAddonCategoryName = "Default addonCategory";
      const addonCategory = await prisma.addonCategory.create({
        data: { name: defaultAddonCategoryName },
      });

      // 7. creat new rowi= in menuAddonCategoty
      const menuAddonCategory = await prisma.menuAddonCategory.create({
        data: { menuId: menu.id, addonCategoryId: menuCategory.id },
      });

      // 8. create new addons
      const defaultAddonNameOne = "Default addon 1";
      const defaultAddonNameTwo = "Default addon 2";
      const defaultAddonNameThree = "Default addon 3";
      const newAddonsData = [
        { name: defaultAddonNameOne, addonCategoryId: addonCategory.id },
        { name: defaultAddonNameTwo, addonCategoryId: addonCategory.id },
        { name: defaultAddonNameThree, addonCategoryId: addonCategory.id },
      ];
      const addons = await prisma.$transaction(
        newAddonsData.map((addon) => prisma.addon.create({ data: addon }))
      );

      // 9. create new Location

      const defaultLocationName = "Sanchaung";
      const location = await prisma.location.create({
        data: {
          name: defaultLocationName,
          address: defaultCompanyAddress,
          companyId: company.id,
        },
      });

      // 10. create new table
      const defaultTable = "Default Table";
      const table = await prisma.table.create({
        data: { name: defaultTable, locationId: location.id },
      });

      return res.status(200).json({
        menuCategory,
        menu,
        menuCategoryMenu,
        addonCategory,
        menuAddonCategory,
        addons,
        location,
        table,
      });
    } else {
      const companyId = dbUser.companyId;
      const locations = await prisma.location.findMany({
        where: { companyId },
      });

      const locationIds = locations.map((item) => item.id);
      const menuCategories = await prisma.menuCategory.findMany({
        where: { companyId },
      });

      const menuCategoryIds = menuCategories.map((item) => item.id);

      const menuCategoryMenu = await prisma.menuCategoryMenu.findMany({
        where: { menuCategoryId: { in: menuCategoryIds } },
      });

      const MenuIds = menuCategoryMenu.map((item) => item.menuId);

      const menus = await prisma.menu.findMany({
        where: { id: { in: MenuIds } },
      });

      const menuAddonCategory = await prisma.menuAddonCategory.findMany({
        where: { menuId: { in: MenuIds } },
      });

      const addonCategoryIds = menuAddonCategory.map(
        (item) => item.addonCategoryId
      );

      const addonCategories = await prisma.addonCategory.findMany({
        where: { id: { in: addonCategoryIds } },
      });

      const addons = await prisma.addon.findMany({
        where: { addonCategoryId: { in: addonCategoryIds } },
      });

      const tables = await prisma.table.findMany({
        where: { locationId: { in: locationIds } },
      });

      return res.status(200).json({
        locations,
        menuCategories,
        menus,
        addonCategories,
        addons,
        tables,
      });
    }
  }
  res.status(405).json("Method not allowed.");
}
