export class Plantmodel {
    public plantid:number;
    public plantName:string;
    public plantLocation:string;
    public plantType:string;
    public Address:string;
  
    public District:string;
    public city:string;
    public state:string;
    public Country:string;
    constructor(plantid:number,plantName:string,plantLocation:string,plantType:string,Address:string,
        District:string,
         city:string,
        state:string,
       Country:string)
       {
this.plantid=plantid;
this.plantName=plantName;
this.plantLocation=plantLocation;

this.plantType=plantType;
this.Address=Address;
this.city=city;
this.District=District;
this.state=state;
this.Country=Country;


       }

}
