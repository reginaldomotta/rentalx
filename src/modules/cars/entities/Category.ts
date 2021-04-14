import { Entity, PrimaryColumn, Colum} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity("categories")
class Category {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;
    description: string;
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }

}

export { Category }