import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EmployeeEvaluationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Faites quelque chose avec les données du formulaire
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <SectionTitle>Section identité du salarié :</SectionTitle>
        <Label>Id</Label>
        <Input {...register('employeeId', { required: true })} />

        <Label>Prénom</Label>
        <Input {...register('employeeFirstName', { required: true })} />

        <Label>Nom</Label>
        <Input {...register('employeeLastName', { required: true })} />

        <Label>Date de naissance</Label>
        <Input type="date" {...register('employeeBirthDate', { required: true })} />

        <Label>Sexe</Label>
        <select {...register('employeeGender', { required: true })}>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>

        <Label>Statut</Label>
        <select {...register('employeeStatus', { required: true })}>
          <option value="ouvrier">Ouvrier</option>
          <option value="etam">ETAM</option>
          <option value="cadre">Cadre</option>
        </select>

        <Label>Intitulé du poste</Label>
        <Input {...register('employeeJobTitle', { required: true })} />

        <Label>Service</Label>
        <Input {...register('employeeService', { required: true })} />
      </Section>

      <Section>
        <SectionTitle>Section identité de l’évaluateur :</SectionTitle>
        <Label>Prénom de l’évaluateur</Label>
        <Input {...register('evaluatorFirstName', { required: true })} />

        <Label>Nom de l’évaluateur</Label>
        <Input {...register('evaluatorLastName', { required: true })} />

        <Label>Intitulé du poste de l’évaluateur</Label>
        <Input {...register('evaluatorJobTitle', { required: true })} />

        <Label>Période évaluée</Label>
        <Input type="text" {...register('evaluationPeriod', { required: true })} />

        <Label>Date de l’entretien</Label>
        <Input type="date" {...register('evaluationDate', { required: true })} />
      </Section>

      <Section>
        <SectionTitle>Section bilan de l’année :</SectionTitle>
        <Label>Ce qui m’a plu</Label>
        <TextArea {...register('likes', { required: true, maxLength: 500 })}></TextArea>
        {errors.likes && <span style={{ color: 'red' }}>Ce champ est requis (max 500 caractères)</span>}

        <Label>Ce qui m’a déplu</Label>
        <TextArea {...register('dislikes', { required: true, maxLength: 500 })}></TextArea>
        {errors.dislikes && <span style={{ color: 'red' }}>Ce champ est requis (max 500 caractères)</span>}

        <Label>Ce qui m’a marqué</Label>
        <TextArea {...register('memorableMoments', { required: true, maxLength: 500 })}></TextArea>
        {errors.memorableMoments && <span style={{ color: 'red' }}>Ce champ est requis (max 500 caractères)</span>}
      </Section>

      <Button type="submit">Soumettre</Button>
    </Form>
  );
};

export default EmployeeEvaluationForm;
