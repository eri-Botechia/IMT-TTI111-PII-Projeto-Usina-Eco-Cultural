const dataSupporters = [
    {
        sId: 1,
        sName: 'Colaborador 1',
        sImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s',
        sDescription: 'Descrição do colaborador 1'
    }
]

const supportersList = (dataList) => {
    return dataList.map((supporter) => (
        `<li class="gallery-item" id="idSupporter${supporter.sId}">
        <h3 class="text-center mb-2">${supporter.sName}</h3>
        <img src="${supporter.sImgUrl}" alt="logo do colaborador" class="gallery-img">
        <p class="m-4 text-center">
        ${supporter.sDescription}
        </p>
        </li>`
    )).join('');
}

const lista = supportersList(dataSupporters);
export const SupportersPage = `
<section class="col-12" id="contentId">
<header class="header-section p-4 text-center">
 <h3>Galeria ECO-CULTURAL</h3>
  <p> Aqui voce encontra algumas imagems dos eventos da galeria eco-cultural</p>
</header>

<ul class="gallery-list">
   ${lista}
</ul>
</section>
`