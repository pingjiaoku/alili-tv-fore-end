// 封装一个通用的方法实现数据的懒加载
// 使用方法：const { refDom, result } = useLazyData(() = {return result});
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";

export const useLazyData = (apiFn) => {
  // target表示组件的最外层div元素
  const refDom = ref(null);
  // 懒加载接口返回的数据
  const result = ref('');
  // 监听组件是否进入可视区
  const { stop } = useIntersectionObserver(
    
    refDom,
    ([{ isIntersecting }]) => {
      // 如果target对应的DOM进入可视区，那么该回调函数就触发
      if (isIntersecting) {
        // 被监听的DOM进入了可视区:此时调用接口获取数据；停止继续监听
        stop();
        result.value = apiFn();
      }
    },
    {
      //threshold 容器和可视区交叉的占比（进入的面积/容器完整面试） 取值，0-1 之间，默认比0大，所以需要滚动较多才能触发进入可视区域事件。
      threshold: 0,
    }
  );
  // target表示被监听的DOM元素，需要在模板中被ref属性绑定
  // result表示接口懒加载获取的业务数据
  return { refDom, result };
};
