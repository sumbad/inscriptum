import 'presentarium';
import list from '../../public/slideshow/list.json';


const slideshow = list.find(it => location.pathname.endsWith(`${it.name}/`));

if(slideshow != null) {
  document.title = slideshow.title;
}
