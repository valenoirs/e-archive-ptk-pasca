import { Request, Response } from 'express'
import { Surat } from '../models/surat'
import { classify } from '../utils/classifier'

export const upload = async (req: Request, res: Response) => {
  try {
    const { name, misc } = req.body

    if (!req.file) {
      req.flash('notification', 'Format file yang di upload tidak sesuai.')
      console.log('[SERVER]: Incorrect file format.')
      return res.redirect('/')
    }

    const category = classify(name)

    console.log(category)

    req.body.asal = misc

    if (category === 'Surat Keluar') {
      delete req.body.asal
      req.body.tujuan = misc
    }

    req.body.uri = `/upload/surat/${req.file?.filename}`
    req.body.category = category

    await new Surat(req.body).save()

    req.flash('notification', 'Surat berhasil diupload.')
    console.log('[SERVER]: New surat uploaded.')
    return res.redirect('back')
  } catch (error) {
    req.flash(
      'notification',
      'Terjadi kesalahan saat proses upload surat, coba lagi.'
    )
    console.error('[SERVER]: Surat upload error.', error)
    return res.redirect('back')
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.body

    const skripsi = await Surat.findById(id)

    if (!skripsi) {
      req.flash('notification', 'Surat tidak ditemukan.')
      console.log('[SERVER]: Surat not found.')
      return res.redirect('/')
    }

    await Surat.findByIdAndDelete(id)

    req.flash('notification', 'Surat berhasil dihapus.')
    console.log('[SERVER]: Surat deleted.')
    return res.redirect('back')
  } catch (error) {
    req.flash(
      'notification',
      'Terjadi kesalahan saat menghapus skripsi, coba lagi.'
    )
    console.error('[SERVER]: Surat delete error.', error)
    return res.redirect('/')
  }
}

export const edit = async (req: Request, res: Response) => {
  try {
    const { id } = req.body

    const skripsi = await Surat.findById(id)

    if (!skripsi) {
      req.flash('notification', 'Surat tidak ditemukan.')
      console.log('[SERVER]: Surat not found.')
      return res.redirect('back')
    }

    await Surat.findByIdAndUpdate(id, { $set: req.body })

    req.flash('notification', 'Surat berhasil diubah.')
    console.log('[SERVER]: Surat edited.')
    return res.redirect('back')
  } catch (error) {
    req.flash(
      'notification',
      'Terjadi kesalahan saat mengubah skripsi, coba lagi.'
    )
    console.error('[SERVER]: Surat edit error.', error)
  }
}

export const search = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const { category, column, query } = req.body

    if (category === 'Surat Masuk') {
      return res.redirect(
        `/surat?category=${category}&column=${column}&query=${query}`
      )
    }
    if (category === 'Surat Keluar') {
      return res.redirect(
        `/surat?category=${category}&column=${column}&query=${query}`
      )
    }
  } catch (error) {
    req.flash(
      'notification',
      'Terjadi kesalahan saat melakukan pencarian, coba lagi.'
    )
    console.error('[SERVER]: Surat search error.', error)
    return res.redirect('/')
  }
}
