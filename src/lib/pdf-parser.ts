import PDFParser from 'pdf2json'

export async function parsePDF(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser()
    
    pdfParser.on('pdfParser_dataReady', (pdfData) => {
      const text = pdfParser.getRawTextContent()
      resolve(text)
    })
    
    pdfParser.on('pdfParser_dataError', (error) => {
      reject(new Error('Failed to parse PDF'))
    })

    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        pdfParser.parseBuffer(Buffer.from(buffer))
      })
      .catch(reject)
  })
} 