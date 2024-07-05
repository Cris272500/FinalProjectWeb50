import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {fetchRegister} from '../helpers/api';


export const RegisterForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  // Watch the password field in order to compare with confirm password field
  const password = watch('password');

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await fetchRegister(data);

    navigate('/login', { replace: true });
    toast.success('Usuario registrado');

    return response;

  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre completo"
            aria-label="Nombre completo"
            {...register("nombre", { required: true })}
          />
        { errors.nombre && <small className="text-danger">El nombre es requerido.</small> }
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            aria-label="Nombre de usuario"
            {...register("username", {required: true}) }
          />
        { errors.username && <small className="text-danger">El nombre de usuario es requerido.</small> }
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control no-spinner"
            placeholder="Número de teléfono"
            aria-label="Número de teléfono"
            min={0}
            maxLength={8}
            {...register("telefono", {required: true})}
          />
        { errors.telefono && <small className="text-danger">El número de teléfono es requerido.</small> }
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control no-spinner"
            placeholder="Número de cuenta"
            aria-label="Número de cuenta"
            min={0}
            maxLength={8}
            {...register("numero_cuenta", {required: true})}
          />
        { errors.numero_cuenta && <small className="text-danger">El número de cuenta es requerido.</small> }
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Dirección"
            aria-label="Dirección"
            {...register("direccion", {required: true})}
          ></textarea>
        { errors.direccion && <small className="text-danger">La dirección es requerida.</small> }
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            aria-label="Contraseña"
            {...register("password", {required: true})}
          />
        { errors.password && <small className="text-danger">La contraseña es requerida.</small> }
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirmar contraseña"
            aria-label="Confirmar contraseña"
            {...register("password2", {
              validate: (value) => 
              value === password || 'Las contraseñas no coinciden.'
            })}
          />
        { errors.password2 && <small className="text-danger">{ errors.password2.message }</small> }
        </div>

        {/* <div className="form-check form-check-info text-start">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree the{" "}
            <Link to="/dashboard" className="text-dark font-weight-bolder">
              Terms and Conditions
            </Link>
          </label>
        </div> */}
        <div className="text-center">
          <button
            type="submit"
            className="btn bg-gradient-dark w-100 my-4 mb-2"
          >
            Registrar
          </button>
        </div>
        <p className="text-sm mt-3 mb-0">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-dark font-weight-bolder">
            Inicia sesión
          </Link>
        </p>
      </form>
    </>
  );
};
