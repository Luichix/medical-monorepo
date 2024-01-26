import React from 'react'
import { AddButton, ListCard, Titles } from '../components'

export const DrugReactionPage = ({
  records,
  openForm,
  onDelete,
  onUpdate,
}: any) => {
  return (
    <Titles
      id="drug-reactions"
      title="Reacción a medicamentos"
      subtitle="En esta sección se especifica los medicamentos a los cuales el paciente a hecho reacción y que tipo de reacción."
    >
      <ListCard records={records} onDelete={onDelete} onUpdate={onUpdate}>
        <AddButton onClick={openForm} />
      </ListCard>
    </Titles>
  )
}
