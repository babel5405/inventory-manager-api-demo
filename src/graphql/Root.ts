import AddCategory from './endpoints/addCategory/AddCategory';
import AddLocation from './endpoints/addLocation/AddLocation';
import AddItem from './endpoints/addItem/AddItem';
import GetAllItems from './endpoints/getAllItems/GetAllItems';
import GetAllCategories from './endpoints/getAllCategories/GetAllCategories';
import GetAllLocations from './endpoints/getAllLocations/GetAllLocations';
import RemoveItem from './endpoints/removeItem/RemoveItem';
import RemoveLocation from './endpoints/removeLocation/removeLocation';
import RemoveCategory from './endpoints/removeCategory/RemoveCategory';
import { FileWatcherEventKind } from 'typescript';

// The root provides a resolver function for each API endpoint
var root = {
    AddCategory: ({name, description} : {name: string, description: string}) => {
        return AddCategory(name, description);
    },
    AddLocation: ({name, description} : {name: string, description: string}) => {
        return AddLocation(name, description);
    },
    AddItem: ({name, description, locationId, categoryId} : {name : string, description : string , locationId : number, categoryId : number}) => {
        return AddItem(name, description, locationId, categoryId);
    },
    GetAllItems: () => {
        return GetAllItems();
    },
    GetAllCategories: () => {
        return GetAllCategories();
    },
    GetAllLocations: () => {
        return GetAllLocations();
    },
    RemoveItem: ({id} : {id: number}) => {
        return RemoveItem(id);
    },
    RemoveLocation: ({id} : {id: number}) => {
        return RemoveLocation(id);
    },
    RemoveCategory: ({id} : {id: number}) => {
        return RemoveCategory(id);
    }
}
export default root;