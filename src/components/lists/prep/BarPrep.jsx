import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PREP_STEPS } from './checklistData';

const BarPrep = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [completedItems, setCompletedItems] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalItems = PREP_STEPS.reduce((acc, step) => 
      acc + Object.values(step.content).flat().length, 0);
    const completedCount = Object.values(completedItems).filter(Boolean).length;
    setProgress((completedCount / totalItems) * 100);
  }, [completedItems]);

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
    setCompletedItems(prev => {
      const newCompleted = { ...prev, [key]: !prev[key] };
      const allCompleted = PREP_STEPS[stepIndex].content[category].every((_, idx) => newCompleted[`${stepIndex}-${category}-${idx}`]);
      if (allCompleted) {
        newCompleted[`${stepIndex}-${category}-title`] = true;
      } else {
        delete newCompleted[`${stepIndex}-${category}-title`];
      }
      return newCompleted;
    });
  };

  const toggleCategoryCompletion = (stepIndex, category) => {
    const key = `${stepIndex}-${category}-title`;
    setCompletedItems(prev => {
      const isCompleted = !prev[key];
      const newCompleted = { ...prev, [key]: isCompleted };
      PREP_STEPS[stepIndex].content[category].forEach((_, idx) => {
        newCompleted[`${stepIndex}-${category}-${idx}`] = isCompleted;
      });
      return newCompleted;
    });
  };

  return (
    <PrepGuide>
      <TitleContainer>
        <OrnamentContainer>
            <TopLeftOrnament />
            <h1>Bar Preparation Guide</h1>
            <TopRightOrnament />
        </OrnamentContainer>
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
                            <CategoryTitle 
                                $isCompleted={completedItems[`${stepIndex}-${category}-title`]}
                                onClick={(e) => { e.stopPropagation(); toggleCategoryCompletion(stepIndex, category); }}
                            >
                                {category === 'items' 
                                ? 'General Items' 
                                : category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
                                }
                            </CategoryTitle>
                            <ToggleIcon $isOpen={expandedSections[stepIndex]?.[category]} />
                        </CategoryHeader>
                        
                        {expandedSections[stepIndex]?.[category] && (
                        <ItemList>
                            {items.map((item, itemIndex) => {
                            const key = `${stepIndex}-${category}-${itemIndex}`;
                            return (
                                <ListItem 
                                    key={itemIndex}
                                    $isCompleted={completedItems[key]}
                                    onClick={() => toggleItem(stepIndex, category, itemIndex)}
                                >
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
        <OrnamentContainer>
            <BottomLeftOrnament />
            <BottomRightOrnament />
        </OrnamentContainer>
      <BlackLine />

      <ProgressContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--text-font)', color: 'var(--highlight1)' }}>
          <span>Preparation Progress:</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar>
          <ProgressFill $percentage={progress} />
        </ProgressBar>
      </ProgressContainer>
    </PrepGuide>
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
  margin-bottom: 3rem;

  h1 {
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
  font-family: var(--title-font);
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: var(--white);
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
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
`;

const ToggleIcon = styled.span`
  width: 16px;
  height: 16px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: ${props => props.$isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    border-left: 12px solid var(--highlight1);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    margin-top: -8px;
    transition: transform 0.2s ease;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  border-left: 2px solid var(--highlight1);
`;

const ListItem = styled.li`
  padding: 0.75rem 0;
  color: var(--primary);
  font-family: var(--main-font);
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
  opacity: ${props => props.$isCompleted ? 0.6 : 1};
  transition: all 0.2s ease;
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
  justify-self: center;
  margin-top: 2rem;
  background: var(--black);
`;

const Ornament = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
    
    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
    }

    ${({ rotate }) => rotate && `rotate: ${rotate};`}
`;

const OrnamentComponent = ({ rotate, alt }) => (
    <Ornament src="/assets/corner-ornament.png" alt={alt} rotate={rotate} />
);

const TopLeftOrnament = () => <OrnamentComponent rotate="90deg" alt="Top Left Ornament" />;
const TopRightOrnament = () => <OrnamentComponent rotate="180deg" alt="Top Right Ornament" />;
const BottomLeftOrnament = () => <OrnamentComponent alt="Bottom Left Ornament" />;
const BottomRightOrnament = () => <OrnamentComponent rotate="270deg" alt="Bottom Right Ornament" />;

const OrnamentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--white);
    position: relative;
    width: 100%;
`;

export default BarPrep;
