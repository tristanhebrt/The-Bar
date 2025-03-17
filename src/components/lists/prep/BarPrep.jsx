import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PREP_STEPS } from './checklistData';

const BarPrep = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [completedItems, setCompletedItems] = useState(() => {
    // Initialize all items as unchecked
    const initialState = {};
    PREP_STEPS.forEach((step, stepIndex) => {
      Object.entries(step.content).forEach(([category, items]) => {
        items.forEach((_, itemIndex) => {
          const key = `${stepIndex}-${category}-${itemIndex}`;
          initialState[key] = false;
        });
      });
    });
    return initialState;
  });
  const [progress, setProgress] = useState(0);

  const toggleSection = (stepIndex, category) => {
    setExpandedSections(prev => ({
      ...prev,
      [stepIndex]: {
        ...prev[stepIndex],
        [category]: !prev[stepIndex]?.[category]
      }
    }));
  };

  const toggleItem = (stepIndex, category, itemIndex) => {
    const key = `${stepIndex}-${category}-${itemIndex}`;
    setCompletedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    const totalItems = PREP_STEPS.reduce((acc, step) => 
      acc + Object.values(step.content).flat().length, 0);
    const completedCount = Object.values(completedItems).filter(Boolean).length;
    setProgress((completedCount / totalItems) * 100);
  }, [completedItems]);

  return (
    <>
        <PrepGuide>
            <TitleContainer>
                <h1>Bar Preparation Guide</h1>
                <BlackLine />
            </TitleContainer>
            
            {PREP_STEPS.map((step, stepIndex) => (
            <StepContainer key={stepIndex}>
                <StepTitle>{step.title}</StepTitle>
                <div>
                {Object.entries(step.content).map(([category, items]) => (
                    <div key={category}>
                    <CategoryHeader 
                        onClick={() => toggleSection(stepIndex, category)}
                        $isOpen={expandedSections[stepIndex]?.[category]}
                    >
                        <CategoryTitle>
                            {category === 'items' 
                                ? 'General Items' 
                                : category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
                            }
                        </CategoryTitle>
                        <ToggleIcon>
                            {expandedSections[stepIndex]?.[category] ? '▼' : '▶'}
                        </ToggleIcon>
                    </CategoryHeader>
                    
                    {expandedSections[stepIndex]?.[category] && (
                        <ItemList>
                        {items.map((item, itemIndex) => {
                            const key = `${stepIndex}-${category}-${itemIndex}`;
                            return (
                            <ListItem 
                                key={itemIndex}
                                $isCompleted={completedItems[key]}
                            >
                                <Checkbox
                                checked={completedItems[key]}
                                onChange={() => toggleItem(stepIndex, category, itemIndex)}
                                />
                                {item}
                            </ListItem>
                            );
                        })}
                        </ItemList>
                    )}
                    </div>
                ))}
                </div>
            </StepContainer>
        ))}

        <ProgressContainer>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            fontFamily: 'var(--text-font)',
            color: 'var(--highlight1)'
          }}>
            <span>Preparation Progress:</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <ProgressBar>
            <ProgressFill $percentage={progress} />
          </ProgressBar>
        </ProgressContainer>
      </PrepGuide>
    </>
  );
};

/* Styled Components */
const PrepGuide = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--white);
  min-height: 100vh;
`;

const StepContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--secondary);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 3rem 0;
  

  h1{
    color: var(--highlight1);
    font-family: var(--title-font);
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }
`;

const StepTitle = styled.h2`
  color: var(--highlight1);
  margin: 0 0 1rem 0;
  font-family: var(--title-font);
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${props => props.$isOpen ? `var(--highlighted-box)` : `var(--white)`};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;

  &:hover {
    background: var(--highlighted-box);
  }
`;

const CategoryTitle = styled.h3`
  margin: 0;
  font-family: var(--main-font);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--black);
`;

const ToggleIcon = styled.span`
  font-family: var(--fancy-font);
  font-size: 1.2rem;
  color: var(--highlight1);
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 1rem;
  border-left: 2px solid var(--highlight1);
  padding-left: 1rem;
`;

const ListItem = styled.li`
  padding: 0.25rem 0;
  color: var(--primary);
  font-family: var(--main-font);
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
  opacity: ${props => props.$isCompleted ? 0.6 : 1};
  transition: all 0.2s ease;

  &::before {
    color: var(--highlight1);
    margin-right: 0.75rem;
    font-size: 1.2rem;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 1rem;
  accent-color: var(--highlight1);
  transform: scale(1.2);
  cursor: pointer;
`;

const ProgressContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--secondary);
  z-index: 1000;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: var(--light-grey);
  border-radius: 4px;
  margin-top: 0.5rem;
`;

const ProgressFill = styled.div`
  width: ${props => props.$percentage}%;
  height: 100%;
  background: var(--highlight1);
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const BlackLine = styled.div`
    width: 60%;
    height: 3px;
    align-self: center;
    margin-top: 2rem;
    background: var(--black);
`;

export default BarPrep;