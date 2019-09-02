export class AppareilService{
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumée'
    },
    {
      name: 'Télévision',
      status: "éteint"
    }
  ];

  switchOnAll(){
    for(let appareil of this.appareils){
       appareil.status = 'allumée';
    }
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')){
        appareil.status = 'éteint';
      }else{
        return null;
      }

    }
  }
  switchOnOne(index: number){
    this.appareils[index].status = 'allumée';
  }
  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }
}
