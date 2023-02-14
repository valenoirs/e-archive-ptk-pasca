import { Router } from 'express'
import { upload } from '../utils/multer'
import * as surat from '../controllers/surat'

export const router = Router()

router.post('/cari', surat.search)

router.post('/', upload.single('file'), surat.upload)

router.delete('/', surat.remove)

router.put('/', surat.edit)
