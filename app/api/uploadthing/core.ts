import { auth } from "@/auth/auth";
import { admin } from "@/services/auth/admin";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    // .middleware(async ({ req }) => {
    //   // This code runs on your server before upload
    //   const user = await auth()
    //   const isAdmin = await admin();
    //   console.log(isAdmin)

    //   // If you throw, the user will not be able to upload
    //   if (!isAdmin) throw new UploadThingError("Unauthorized");

    //   // Whatever is returned here is accessible in onUploadComplete as `metadata`
    //   return { userId: user?.user.id };
    // })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", true);

      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: true };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;