export interface Products{
    id: number; /*INT - "içinde yazılmaz." */
    name: string; /*VARCHAR - "içinde yazılır." */   /* Örnek: name: "domates" */
    price: number; /*INT - "içinde yazılmaz." */  /* Örnek:   id: 100 */
}

/* Bunu görüyorsan importlarda bu olayı çağırmak için süslü parantez kullanacaksın. export varsa, importlarda süslü parantez vardır. Eğer export default varsa, importlarda süslü parantez yoktur. Ters orantı. Birisi varsa diğeri*/ 








/*export interface MenuItem{
    id: number;
    name: string;
    link: string;
}*/