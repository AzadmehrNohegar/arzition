import { Toast } from "@/components/toast";
import { useToastStore } from "@/store/toast";

function ToastContainer() {
  const { stack } = useToastStore();

  return (
    <div className="toast w-full z-50">
      {stack.map((item, index) => (
        <Toast key={index} toast={item} index={index} />
      ))}
    </div>
  );
}

export { ToastContainer };
