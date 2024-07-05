import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <>
      <form>
        <div class="mb-3">
          <input
            type="text"
            class="form-control form-control-lg"
            placeholder="Nombre de usuario"
            aria-label="Nombre de usuario"
            {...register("username", {required: true}) }
          />
        { errors.username && <small className="text-danger">El nombre de usuario es requerido.</small> }

        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Contraseña"
            aria-label="Contraseña"
            {...register("password", {required: true})}
          />
        { errors.password && <small className="text-danger">La contraseña es requerida.</small> }

        </div>

        <div class="text-center">
          <button
            type="button"
            class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </>
  );
};
