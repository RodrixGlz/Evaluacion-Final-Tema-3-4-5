document.addEventListener('DOMContentLoaded', function (){
    let imagenes = [
        {img: 'https://i.picsum.photos/id/908/536/354.jpg?hmac=M2wuBVxh25vxS5l_a0PNxpE_5rsVtgJVC5lbN4HOreA'},
        {img: 'https://i.picsum.photos/id/499/536/354.jpg?hmac=8f-M63IkmYvH2AXKVRL_mE-G5R9N1Qbt2rAPNq_rXvs'},

        {img: 'https://i.picsum.photos/id/620/536/354.jpg?hmac=_2pm-B21Zzjfs_NH_75cY2sC0odhWQbKUMU9oCHoyh4'},
        {img: 'https://i.picsum.photos/id/350/536/354.jpg?hmac=_FW1TlZ0o-vFFUN5WZgMtGCyi221yogDpsLGwvV28uk'},
        {img: 'https://i.picsum.photos/id/477/536/354.jpg?hmac=xF0Oza6m9xHj-dnGvJss_45TnMW9mfyiQ2d4TmPKZ7g'},

        {img: 'https://i.picsum.photos/id/524/536/354.jpg?hmac=19gG9nfdNuzgZSd7wddfM983s0ObPijNuoJ88KB_TCg'},
        {img: 'https://i.picsum.photos/id/483/536/354.jpg?hmac=tSU8kE0O8WPQ1mTWY-ZGj2E1wPpEfsL-PZhvYAL0bbo'},

        {img: 'https://i.picsum.photos/id/408/536/354.jpg?hmac=p00tjQQfUXNRq9tf57sEzeZGi0Is10PApQW0RypJe4c'},
        {img: 'https://i.picsum.photos/id/839/536/354.jpg?hmac=rRPD5ORZY8xibjxZvrRUuUMfyc666vf0KQrPFOcZSJA'},
        {img: 'https://i.picsum.photos/id/238/536/354.jpg?hmac=lTwb8DbxMAh_q5cLhPzEQP7gbKMA4MAythQrpcQSm3U'},

        {img: 'https://i.picsum.photos/id/506/536/354.jpg?hmac=AuIAfZpC6bNn6q029cCV7_C9sJaqOk1k4GVHotE6XQ4'},
        {img: 'https://i.picsum.photos/id/301/536/354.jpg?hmac=c7TLbE2ZxYKeMsss337rx9i7v9NJ9Yd0VVtL4H5PZiE'},

        {img: 'https://i.picsum.photos/id/1031/536/354.jpg?hmac=Ta7zZ5cJU1HE5Nh5wuUycZ9FHgJYqTfW0wxQvBWgXQQ'},
        {img: 'https://i.picsum.photos/id/270/536/354.jpg?hmac=mnhmFHibNPisjwBAA_oFyczU3QOuP0Pd6-oeEm5IQaU'},
        {img: 'https://i.picsum.photos/id/903/536/354.jpg?hmac=sT1b08yX5moLPh9aEQiEZSam0doEVo8eq01YqWxUOn8'},

        {img: 'https://i.picsum.photos/id/807/536/354.jpg?hmac=kkWC8rAK1uphdPT88-ZzXPy808J739fsntRMFw-FCK0'},
        {img: 'https://i.picsum.photos/id/227/536/354.jpg?hmac=1jloCASGdPzCfkdYKsHPN_SJWF91dYptz1hBpmEbKI4'},

        {img: 'https://i.picsum.photos/id/957/536/354.jpg?hmac=TMMUmVyJpOowQD0zHLuftELD0FPZ8qmZ6ZvmDYO5S8I'},
        {img: 'https://i.picsum.photos/id/959/536/354.jpg?hmac=aHSGne7GiF18xhfbfsqMMXEg_kJCx8Qm_KzZpp4LFDg'},
        {img: 'https://i.picsum.photos/id/162/536/354.jpg?hmac=O9LyWssbp2-8dlACsHdgF2OiKw5IrePVo8GUg6t7d5Y'}
        
    ]
    let contador = 0
    const contenedor = document.querySelector('.carrucel')
    const camp_trabajo = document.querySelector('.camp_trabajo')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_carrucel = document.querySelector('.carrucel img')

    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.retroceder'),
            adelante = contenedor.querySelector('.avanzar'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
    }) 

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_carrucel.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            camp_trabajo.style.opacity = 1
            camp_trabajo.style.visibility = 'visible'
        })
    })

    document.querySelector('.cerrar').addEventListener('click', () =>{
        camp_trabajo.style.opacity = 0
        camp_trabajo.style.visibility = 'hidden'
    })
})