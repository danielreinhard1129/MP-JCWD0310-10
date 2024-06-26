import { Request } from "express";
import multer from "multer";
import { join } from "path";

type DestinationCallback = (err: Error | null, destination: string) => void;
type FilenameCallback = (err: Error | null, filename: string) => void;

export const uploader = (filePrefix: string, folderName?: string) => {
  const defaultDir = join(__dirname, "../../public");

  const storage = multer.diskStorage({
    //untuk menentukan destination file kita(mau di taruh di folder mana)
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
      const destination = folderName ? defaultDir + folderName : defaultDir;
      cb(null, destination);
    },

    //untuk mengubah nama default file kita menjadi ada prefix yg kita masukan
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FilenameCallback
    ) => {
      const originalnameParts = file.originalname.split(".");
      const fileExtension = originalnameParts[originalnameParts.length - 1];
      const newFileName = filePrefix + Date.now() + "." + fileExtension;

      cb(null, newFileName);
    },
  });

  return multer({ storage });
};
