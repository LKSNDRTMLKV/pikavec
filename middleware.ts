import { chain } from '@/middlewares/chain'
import auth from '@/middlewares/auth'
import cookie from '@/middlewares/cookie'

export default auth;

// export default chain([authMiddleware])



// // Optionally, don't invoke Middleware on some paths

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

export const config = {
  matcher: ["/((?!api|_next/static|.*svg|.*png|.*jpg|.*jpeg|.*gif|.*webp|_next/image|favicon.ico).*)"],
};
