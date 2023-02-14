import WhichX from 'whichx'

const classifier = new WhichX()

const labels: string[] = ['masuk', 'keluar']

classifier.addLabels(labels)
classifier.addData(
  'masuk',
  'surat masuk persetujuan undangan pemberitahuan edaran'
)
classifier.addData(
  'keluar',
  'surat keluar penerbitan survey permohonan ujian seminar tahap usulan aktif kuliah keputusan'
)

export const classify = (text: string) => {
  const output = classifier.classify(text)

  if (output === 'masuk') return 'Surat Masuk'
  if (output === 'keluar') return 'Surat Keluar'

  return 'Error'
}
