import React, { useEffect, useState } from 'react';
import { Header, Sidebar } from '../components'
import { useForm } from 'react-hook-form'
import { fetchCreateTicket, fetchClientes, fetchAgentes, fetchAreas, fetchServicios, fetchSubservicios } from '../helpers/api'

const TicketForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = async (data) => {
        console.log("w: " +watch)
        console.log('Error al dadad el ticket:', data);
        try {
            const response = await fetchCreateTicket(data);
            console.log('Ticket creado:', response);
        } catch (error) {
            console.error('Error al crear el ticket:', error);
        }    
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Asunto */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Asunto <span className="text-red">*</span></label>
                        <input type="text" 
                               className="form-control" 
                               placeholder="Asunto"
                               {...register("asunto", { required: true })}
                        />
                        {errors.asunto && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                {/* Prioridad */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Prioridad <span className="text-red">*</span></label>
                        <select className="form-control form-select" {...register("prioridad", { required: true })}>
                            <option value="">Seleccione una prioridad</option>
                            <option value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </select>
                        {errors.prioridad && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                {/* Estado */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Estado <span className="text-red">*</span></label>
                        <select className="form-control form-select" {...register("estado", { required: true })}>
                            <option value="">Seleccione un estado</option>
                            <option value="Abierto">Abierto</option>
                            <option value="Cerrado">Cerrado</option>
                            <option value="Vencido">Vencido</option>
                        </select>
                        {errors.estado && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                {/* Asignación Actual */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Asignación Actual</label>
                        <select className="form-control form-select" {...register("asignacion_actual")}>
                            <option value="">Seleccione una asignación</option>
                            <option value="Administracion de redes">Administracion de redes</option>
                            <option value="Soporte en campo">Soporte en campo</option>
                            <option value="Ventas">Ventas</option>
                            <option value="Soporte Técnico">Soporte Técnico</option>
                            <option value="Atención al cliente">Atención al cliente</option>
                        </select>
                    </div>
                </div>

                {/* Areas */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Área</label>
                        <select className="form-control form-select" {...register("nombre_area")}>
                            <option value="">Seleccione una área</option>
                            <option value="5">Administracion de redes</option>
                            <option value="4">Soporte en campo</option>
                            <option value="3">Ventas</option>
                            <option value="2">Soporte Técnico</option>
                            <option value="1">Atención al cliente</option>
                        </select>
                    </div>
                </div>

                {/* Servicio */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Servicio <span className="text-red">*</span></label>
                        <input type="number"
                               className="form-control"
                               {...register("servicio", { required: true })}
                        />
                        {errors.servicio && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                {/* Subservicio */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Subservicio <span className="text-red">*</span></label>
                        <input type="number"
                               className="form-control"
                               {...register("sub_servicio", { required: true })}
                        />
                        {errors.sub_servicio && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                {/* Cliente */}
                <div className='col-sm-6 col-12'>
                    <div className="mb-3">
                        <label className="form-label">Cliente <span className="text-red">*</span></label>
                        <input type="number"
                               className="form-control"
                               {...register("cliente", { required: true })}
                        />
                        {errors.cliente && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                {/* Agente */}
                <div className="col-sm-6 col-12">
                    <div className="mb-3">
                        <label className="form-label">Agente <span className="text-red">*</span></label>
                        <input type="number"
                               className="form-control"
                               {...register("agente", { required: true })}
                        />
                        {errors.agente && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                {/* Descripción */}
                <div className="col-sm-12 col-12">
                    <div className="mb-3">
                        <label className="form-label">Descripción <span className="text-red">*</span></label>
                        <textarea
                            rows="4"
                            className="form-control"
                            placeholder="Descripción"
                            {...register("descripcion", { required: true })}
                        ></textarea>
                        {errors.descripcion && <span className="text-danger">Este campo es requerido</span>}
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Crear Ticket</button>
                </div>
            </div>
        </form>
    );
};

export default TicketForm;
import toast from 'react-hot-toast'

export const CreateTicket = () => {

    const [clientes, setClientes] = useState([]);
    const [agentes, setAgentes] = useState([]);
    const [areas, setAreas] = useState([]);
    const [servicios, setServicios] = useState([]);
    const [subservicios, setSubservicios] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetchCreateTicket(data);
            console.log('Ticket creado:', response);
            toast.success('Ticket creado:', response);
        } catch (error) {
            toast.error('Error al crear el ticket:', error);
            console.error('Error al crear el ticket:', error);
        }
    };
  return (
    
    <>
        <div className="page-wrapper ml-2">
            <div className="main-container">
                <div className="content-wrapper-scroll">

                    <div className="content-wrapper">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {/* Asunto */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Asunto <span className="text-red">*</span></label>
                                    <input type="text" className="form-control" placeholder="Asunto" {...register("asunto", { required: true })} />
                                    {errors.asunto && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            {/* Prioridad */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Prioridad <span className="text-red">*</span></label>
                                    <select className="form-control form-select" {...register("prioridad", { required: true })}>
                                        <option value="">Selecciona una prioridad</option>
                                        <option value="Baja">Baja</option>
                                        <option value="Media">Media</option>
                                        <option value="Alta">Alta</option>
                                    </select>
                                    {errors.prioridad && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            {/* Estado */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Estado <span className="text-red">*</span></label>
                                    <select className="form-control form-select" {...register("estado", { required: true })}>
                                        <option value="">Selecciona un estado</option>
                                        <option value="Abierto">Abierto</option>
                                        <option value="Cerrado">Cerrado</option>
                                        <option value="Vencido">Vencido</option>
                                    </select>
                                    {errors.estado && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            {/* Asignación Actual */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Asignación Actual</label>
                                    <select className="form-control form-select" {...register("asignacion_actual")}>
                                        <option value="">Selecciona una asignación</option>
                                        <option value="Administracion de redes">Administracion de redes</option>
                                        <option value="Soporte en campo">Soporte en campo</option>
                                        <option value="Ventas">Ventas</option>
                                        <option value="Soporte Tecnico">Soporte Técnico</option>
                                        <option value="Atencion al cliente">Atención al cliente</option>
                                    </select>
                                </div>
                            </div>

                            {/* Area */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Área</label>
                                    <select className="form-control form-select" {...register("nombre_area")}>
                                        <option value="">Selecciona una área</option>
                                        <option value="5">Administracion de redes</option>
                                        <option value="4">Soporte en campo</option>
                                        <option value="3">Ventas</option>
                                        <option value="2">Soporte Técnico</option>
                                        <option value="1">Atención al cliente</option>
                                    </select>
                                </div>
                            </div>

                            {/* Vencimiento */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Fecha de vencimiento</label>
                                    <input type="datetime-local" className="form-control" {...register("fecha_vencimiento")} placeholder="Fecha de vencimiento" />
                                </div>
                            </div>

                            {/* Servicio */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Servicio <span className="text-red">*</span></label>
                                    <input type="number" className="form-control" {...register("servicio", { required: true })} />
                                    {errors.servicio && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            {/* Subservicio */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Subservicio <span className="text-red">*</span></label>
                                    <input type="number" className="form-control" {...register("sub_servicio", { required: true })} />
                                    {errors.sub_servicio && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            {/* Cliente */}
                            <div className='col-sm-6 col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Cliente <span className="text-red">*</span></label>
                                    <input type="number" className="form-control" {...register("id_cliente", { required: true })} />
                                    {errors.cliente && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            {/* Agente */}
                            <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Agente <span className="text-red">*</span></label>
                                    <input type="number" className="form-control" {...register("id_agente", { required: true })} />
                                    {errors.agente && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            {/* Descripción */}
                            <div className="col-sm-12 col-12">
                                <div className="mb-3">
                                    <label className="form-label">Descripción <span className="text-red">*</span></label>
                                    <textarea rows="4" className="form-control" placeholder="Descripción" {...register("descripcion", { required: true })}></textarea>
                                    {errors.descripcion && <span className="text-danger">Este campo es requerido</span>}
                                </div>
                            </div>

                            <div className="col-sm-12 col-12">
                                <button type="submit" className="btn btn-primary">Crear Ticket</button>
                            </div>
                        </div>
                    </form>


                    </div>

                    <div className="app-footer">
                        <span>© Arise admin 2023</span>
                    </div>

                </div>

            </div>

        </div>

    </>
  )
}
