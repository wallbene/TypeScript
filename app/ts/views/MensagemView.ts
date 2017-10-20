import {View} from './View';
import { Mensagem } from '../models/Mensagem';

export class MensagemView extends View<Mensagem> {

    template(model: Mensagem): string{
        return `<p class="alert alert-info">${model.texto}</p>`;

    }

}