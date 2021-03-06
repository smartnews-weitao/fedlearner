import React, { ReactElement } from 'react';
import ProjectForm from '../ProjectForm';
import BreadcrumbLink from 'components/BreadcrumbLink';
import { createProject } from 'services/project';
import { useTranslation } from 'react-i18next';

function CreateProject(): ReactElement {
  const { t } = useTranslation();
  return (
    <>
      <BreadcrumbLink
        paths={[{ label: 'menu.label_project', to: '/projects' }, { label: 'project.create' }]}
      />

      <ProjectForm onSubmit={onSubmit} />
    </>
  );
  async function onSubmit<CreateProjectFormData>(payload: CreateProjectFormData) {
    try {
      await createProject(payload);
    } catch (error) {
      throw error;
    }
  }
}

export default CreateProject;
