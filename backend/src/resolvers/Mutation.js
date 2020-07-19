const Mutations = {
  async createItem(parent, args, ctx, info) {
    // check if they are loggedd in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );
    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the update
    const updates = { ...args };
    // remove the id from the update
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id },
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // find the item
    const item = await ctx.db.query.item({ where }, `{ id title }`)
    // check if they own that item, or have permissions
    // TODO
    // delete it
    return ctx.db.mutation.deleteItem({where}, info);
  },
};

module.exports = Mutations;
