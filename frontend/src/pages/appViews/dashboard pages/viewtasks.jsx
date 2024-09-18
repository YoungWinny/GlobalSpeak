import React, { useState } from 'react';
import { FiPlus, FiEdit2, FiX, FiUserPlus, FiPaperclip, FiFileText, FiSend } from 'react-icons/fi';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Main ViewTasks component
const ViewTasks = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Pagination state
  const [currentPages, setCurrentPages] = useState({
    todo: 1,
    inProgress: 1,
    done: 1,
  });
  const tasksPerPage = 5;

  const [columns, setColumns] = useState({
    todo: [
      { id: '1', title: 'Change charts javascript', dueDate: '5 days left', image: null },
      { id: '2', title: 'Change homepage', dueDate: '22 days left', image: 'https://via.placeholder.com/150' },
      { id: '3', title: 'Task 3', dueDate: '10 days left', image: null },
      { id: '4', title: 'Task 4', dueDate: '12 days left', image: 'https://via.placeholder.com/150' },
      { id: '7', title: 'Task 7', dueDate: '2 days left', image: 'https://via.placeholder.com/150' },
    ],
    inProgress: [
      { id: '5', title: 'Redesign tables card', dueDate: '9 days left', image: 'https://via.placeholder.com/150' },
    ],
    done: [
      { id: '6', title: 'Redesign homepage', status: 'Done', image: 'https://via.placeholder.com/150' },
    ],
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const addCard = (columnName) => {
    const newCard = { id: `${Date.now()}`, title: 'New Task', dueDate: 'TBD', image: null };
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnName]: [...prevColumns[columnName], newCard],
    }));
  };

  // Pagination Logic
  const getCurrentPageTasks = (cards, columnName) => {
    const currentPage = currentPages[columnName];
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    return cards.slice(indexOfFirstTask, indexOfLastTask);
  };

  const handleNextPage = (columnName) => {
    const totalTasks = columns[columnName].length;
    const totalPages = Math.ceil(totalTasks / tasksPerPage);
    if (currentPages[columnName] < totalPages) {
      setCurrentPages((prevPages) => ({
        ...prevPages,
        [columnName]: prevPages[columnName] + 1,
      }));
    }
  };

  const handlePrevPage = (columnName) => {
    if (currentPages[columnName] > 1) {
      setCurrentPages((prevPages) => ({
        ...prevPages,
        [columnName]: prevPages[columnName] - 1,
      }));
    }
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = [...columns[source.droppableId]];
    const destCol = [...columns[destination.droppableId]];
    const [removedTask] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, removedTask);

    setColumns({
      ...columns,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex p-5 space-x-4 h-full w-full overflow-x-auto">
        {Object.keys(columns).map((columnName) => (
          <Column
            key={columnName}
            title={columnName}
            cards={getCurrentPageTasks(columns[columnName], columnName)}
            onAddCard={() => addCard(columnName)}
            onEdit={toggleModal}
            columnName={columnName}
            handleNextPage={() => handleNextPage(columnName)}
            handlePrevPage={() => handlePrevPage(columnName)}
            currentPage={currentPages[columnName]}
            totalPages={Math.ceil(columns[columnName].length / tasksPerPage)}
          />
        ))}
        {isModalOpen && <Modal onClose={toggleModal} />}
      </div>
    </DragDropContext>
  );
};

// Modal Component
const Modal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg relative shadow-2xl max-w-2xl w-full">
      <button
        className="absolute top-3 right-3 text-black text-2xl outline-"
        onClick={onClose}
      >
        <FiX />
      </button>
      <h3 className="text-xl font-bold mb-4 text-black">Edit Task</h3>
      <h4 className="text-lg font-semibold mb-2 text-black">Redesign Homepage</h4>
      <p className="text-sm mb-4 text-gray-400">Added by Bonnie Green, 22 hours ago</p>

      <div className="flex items-center mb-4">
        <img className="w-8 h-8 rounded-full border-2 border-gray-700" src="https://via.placeholder.com/150" alt="Avatar" />
        <button className="bg-blue-700 text-black px-3 py-1 rounded ml-4 flex items-center">
          <FiUserPlus className="mr-1" /> Join
        </button>
        <button className="bg-gray-600 text-black px-3 py-1 rounded ml-2 flex items-center">
          <FiPaperclip className="mr-1" /> Attachment
        </button>
      </div>

      <div className="mb-4">
        <h5 className="font-semibold mb-1 text-gray-300 flex items-center">
          <FiFileText className="mr-2" /> Description
        </h5>
        <p className="text-sm text-gray-400 mb-2">
          I made some wireframes that we would like you to follow...
        </p>
        <button className="text-blue-500 text-sm">Show Full Description</button>
      </div>

      <textarea
        className="w-full p-2 bg-gray-800 rounded text-sm mb-4 text-black"
        placeholder="Write a comment..."
        rows="6"
      ></textarea>
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-700 text-black px-4 py-2 rounded flex items-center">
          <FiSend className="mr-1" /> Post comment
        </button>
        <span className="text-gray-400 text-sm flex items-center">
          <FiPaperclip className="mr-1" /> Attach a file
        </span>
      </div>

      <div className="flex justify-between">
        <button className="bg-blue-700 px-4 py-2 rounded text-black">Save</button>
        <button className="bg-gray-600 px-4 py-2 rounded text-black">Move</button>
        <button className="bg-gray-600 px-4 py-2 rounded text-black">Copy</button>
        <button className="bg-gray-600 px-4 py-2 rounded text-black">Archive</button>
        <button className="bg-gray-600 px-4 py-2 rounded text-black">Watch</button>
      </div>
    </div>
  </div>
);

// Column Component
const Column = ({ title, cards, onAddCard, onEdit, columnName, handleNextPage, handlePrevPage, currentPage, totalPages }) => (
  <Droppable droppableId={columnName}>
    {(provided) => (
      <div
        className="bg-gray-800 rounded-lg w-80 p-4 flex-shrink-0"
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        <h2 className="text-lg font-bold mb-3 text-white capitalize">{title}</h2>
        <div className="flex-grow space-y-4">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} onEdit={onEdit} />
          ))}
        </div>
        {provided.placeholder}
        <AddCard onAddCard={onAddCard} />
        <div className="flex justify-between mt-4">
          <button onClick={handlePrevPage} className="bg-gray-700 px-4 py-2 rounded text-white" disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={handleNextPage} className="bg-gray-700 px-4 py-2 rounded text-white" disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    )}
  </Droppable>
);

// Card Component
const Card = ({ card, index, onEdit }) => (
  <Draggable draggableId={String(card.id)} index={index}>
    {(provided) => (
      <div
        className="bg-gray-700 rounded-lg p-4 text-white"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold">{card.title}</h3>
          <FiEdit2 className="text-white cursor-pointer" onClick={onEdit} />
        </div>
        <p className="text-xs text-gray-300">{card.dueDate}</p>
        {card.image && (
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-32 object-cover rounded mt-2"
          />
        )}
      </div>
    )}
  </Draggable>
);

// AddCard component
const AddCard = ({ onAddCard }) => (
  <button
    className="w-full bg-gray-700 text-white px-4 py-2 rounded flex justify-center items-center mt-4"
    onClick={onAddCard}
  >
    <FiPlus className="mr-2" />
    Add Task
  </button>
);

export default ViewTasks;

