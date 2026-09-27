interface ProcedureDef<TIn, TOut> {
  call: (input: TIn) => TOut;
}

const router = { 
  getUser: { call: (id: string) => ({ id, name: "Ada" }) },
  addPost: { call: (title: string) => ({ id: "p1", title }) },
};

type AppRouter = typeof router;
type InferOutput<T> = T extends ProcedureDef<any, infer R> ? R : never;

const res = router.getUser.call("usr-1");
console.log(`Procedure output name: ${res.name}`);
const post = router.addPost.call("Architecture");
console.log(`Created post title: ${post.title}`);
console.log(`Total router endpoints: ${Object.keys(router).length}`);
