import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, text, }) => {
  let owned = '6289649178812@s.whatsapp.net'
  let res = await fetch(`https://api.tokovoucher.id/produk/code?member_code=M230129SGPI6006LU&signature=440c61499871dc1c4c409699c05e0074&kode=trp`)
  let json = await res.json()
  let ptn2023 = `
CODE ${json.data[0].code}
NAMA ${json.data[0].nama_produk}
HARGA ${json.data[0].price} \n
CODE ${json.data[4].code}
NAMA ${json.data[4].nama_produk}
HARGA ${json.data[4].price} \n
CODE ${json.data[7].code}
NAMA ${json.data[7].nama_produk}
HARGA ${json.data[7].price} \n
CODE ${json.data[8].code}
NAMA ${json.data[8].nama_produk}
HARGA ${json.data[8].price} \n
CODE ${json.data[9].code}
NAMA ${json.data[9].nama_produk}
HARGA ${json.data[9].price} \n
CODE ${json.data[10].code}
NAMA ${json.data[10].nama_produk}
HARGA ${json.data[10].price} \n
CODE ${json.data[3].code}
NAMA ${json.data[3].nama_produk}
HARGA ${json.data[3].price} \n
CODE ${json.data[5].code}
NAMA ${json.data[5].nama_produk}
HARGA ${json.data[5].price} \n
CODE ${json.data[6].code}
NAMA ${json.data[6].nama_produk}
HARGA ${json.data[6].price} \n
CODE ${json.data[10].code}
NAMA ${json.data[10].nama_produk}
HARGA ${json.data[10].price} \n
CODE ${json.data[2].code}
NAMA ${json.data[2].nama_produk}
HARGA ${json.data[2].price} 
┗━━━━━━━━━━━━━━━━━━━ꕥ`
  conn.reply(m.chat, `┏━━━ꕥ *「 TRI REGULER 」* ꕥ━⬣ ${ptn2023}`,m)
}
handler.help = ['list']
handler.owned = true
handler.group = true
handler.premium = true
handler.command = /^(tri)$/i

export default handler