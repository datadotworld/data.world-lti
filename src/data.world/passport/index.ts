import DataDotWorldConfig from '../../config/data.world';
import DataDotWorldStrategy from './strategy';

const strategy = new DataDotWorldStrategy(

    DataDotWorldConfig.getKeyValue('client_id'),
    DataDotWorldConfig.getKeyValue('client_secret'),
    DataDotWorldConfig.getKeyValue('redirect_uri'),

);

export default strategy;