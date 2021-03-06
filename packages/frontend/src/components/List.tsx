/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useState, useCallback } from 'react';

import Input from './Input';

function List() {
	const [newTask, setNewTask] = useState('');
	const shouldUpdateTaskEntry = useCallback((updatedValue: string) => {
		setNewTask(updatedValue);
	}, []);
	return (
		<div>
			<Input onChange={shouldUpdateTaskEntry} value={newTask} />
		</div>
	);
}

export default List;
